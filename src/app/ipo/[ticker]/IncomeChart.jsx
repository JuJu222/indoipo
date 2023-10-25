'use client'

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function IncomeChart({ groupedFinancial }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let dateMYOnly = {month: 'short', year: 'numeric'};
    const labels = groupedFinancial.map(function(financial) {
        let date = new Date(financial['date_end']).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()
        return date;
    });

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => [0, 1, 2, 3, 4, 5, 6]),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} height={400} />
    );
}

export default IncomeChart;