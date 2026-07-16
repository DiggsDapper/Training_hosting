export class DataProcessor {
    constructor() {
        this.tasksData = [
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-22', time1: '10:11', time2: '10:11', days: 206 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-22', time1: '10:39', time2: '10:21', days: 206 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-22', time1: '10:37', time2: '10:31', days: 206 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-27', time1: '09:28', time2: '09:23', days: 201 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '09:29', time2: '09:29', days: 201 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '11:28', time2: '11:28', days: 201 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '11:34', time2: '11:34', days: 201 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '12:22', time2: '12:22', days: 201 },
            { cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '12:45', time2: '12:45', days: 201 }
        ];
    }
    
    getTasksData() {
        return this.tasksData;
    }
    
    filterByDate(date) {
        return this.tasksData.filter(task => task.date === date);
    }
    
    filterByType(type) {
        return this.tasksData.filter(task => task.type === type);
    }
    
    sortByDays(order = 'desc') {
        const sorted = [...this.tasksData];
        return sorted.sort((a, b) => order === 'desc' ? b.days - a.days : a.days - b.days);
    }
}