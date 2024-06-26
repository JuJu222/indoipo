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
import {toRp} from "../../../helpers/formatter";

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
        maintainAspectRatio : false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `Periode ${groupedFinancial[0].interval} Bulan (Dalam Rp)`,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        return toRp(value);
                    }
                }
            }
        }
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
        <Bar options={options} data={data} height={300} />
    );
}

export default IncomeChart;