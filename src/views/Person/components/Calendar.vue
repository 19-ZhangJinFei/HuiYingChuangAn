<template>
    <div class="calendar">
        <div class="header">
            <span class="month">{{ currentMonthName }}</span>
        </div>
        <div class="date-display">
            <table class="date-table">
                <thead>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(week, weekIndex) in weeks" :key="weekIndex">
                        <td v-for="(day, dayIndex) in week" :key="dayIndex">
                            <span v-if="day">{{ day }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const currentDate = ref(new Date());
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentMonthName = computed(() => {
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    return months[currentMonth.value];
});

const weeks = computed(() => {
    const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
    const calendarDays: number[][] = [];
    let week: number[] = [];

    // 填充前导空白
    for (let i = 0; i < firstDayOfMonth; i++) {
        week.push(0);
    }

    // 填充日期
    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day);
        if (week.length === 7) {
            calendarDays.push([...week]);
            week = [];
        }
    }

    // 填充尾随空白
    if (week.length > 0) {
        while (week.length < 7) {
            week.push(0);
        }
        calendarDays.push([...week]);
    }

    return calendarDays;
});
</script>

<style scoped>
.calendar {
    width: 60%;
    padding: 10px;
    box-sizing: border-box;
    height: 30%;
}

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 20px;
    color: #d00508;
    letter-spacing: 3px;
    margin-left: 9px;
}

.date-display {
    display: flex;
    flex-direction: column;
    height: 90%;
}

.current-date {
    font-size: 36px;
    margin-bottom: 10px;
}

.date-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
}

.date-table th,
.date-table td {
    text-align: center;
    padding: 1%;
    box-sizing: border-box;
}

.date-table td span {
    display: inline-block;
    width: 41%;
    height: 20%;
    line-height: 20px;
}
</style>