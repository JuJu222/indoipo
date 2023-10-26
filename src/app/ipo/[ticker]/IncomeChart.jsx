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

    console.log(groupedFinancial[0].interval)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `${groupedFinancial[0].interval} Bulan`,
            },
        },
    };

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let dateMYOnly = {month: 'short', year: 'numeric'};
    const labels = groupedFinancial.map(function(financial) {
        let date = new Date(financial['date_end']).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()
        return date;
    });
    const dataset = groupedFinancial.map(function(financial) {
        const net_income = financial.net_income
        return net_income
    });

    const data = {
        labels,
        datasets: [
            {
                data: dataset,
                backgroundColor: (ctx) => {
                    if (ctx.raw > 0) {
                        return 'rgb(104,185,132)';
                    }

                    if (ctx.raw < 0) {
                        return 'rgb(234,69,69)';
                    }

                    return 'gray';
                }
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
}

export default IncomeChart;