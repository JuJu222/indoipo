'use client'

import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {toRp} from "../../../helpers/formatter";

function IncomeChart({ groupedFinancials }) {
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
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, ticks) {
                        return toRp(value);
                    }
                }
            }
        }
    };

    let financials = []
    for (const [index, groupedFinancial] of groupedFinancials.entries()) {
        for (const [index2, financial] of groupedFinancial.entries()) {
            if (financial.asset != null && financial.liability != null && financial.interval != 0) {
                financials.push(financial)
            }
        }
    }
    financials = financials.sort((a, b) => {
        // Assuming 'interval' is a string representing a date (e.g., '2023-09-01')
        const dateA = new Date(a.date_end);
        const dateB = new Date(b.date_end);

        // Sort in descending order by comparing the dates
        return dateB - dateA;
    });

    let dateMYOnly = {month: 'short', year: 'numeric'};

    const labels = financials.map(function(financial) {
        let date = new Date(financial['date_end']).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()
        return date;
    });
    const assetDataset = financials.map(function(financial) {
        return financial.asset
    });
    const liabilityDataset = financials.map(function(financial) {
        return financial.liability
    });

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Aset',
                data: assetDataset,
                backgroundColor: (ctx) => {
                    return 'rgb(104,185,132)';
                }
            },
            {
                label: 'Total Liabilitas',
                data: liabilityDataset,
                backgroundColor: (ctx) => {
                    return 'rgb(234,69,69)';
                }
            },
        ],
    };

    return (
        <Bar options={options} data={data} height={300} />
    );
}

export default IncomeChart;