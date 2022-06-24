import React from "react";
import { useSelector } from "react-redux"
import { Doughnut } from "react-chartjs-2";
import { Chart } from 'chart.js'
import styled from "styled-components";
import { Paper } from "@mui/material";

const Gauge = ({ id = "gauge" }) => {

    const counter = useSelector(store => store.cartState.itemsCounter)

    const data = {
        labels: ["در حال ثبت", "مرجوعی", "تحویل داده شد", "جاری"],
        datasets: [
            {
                data: [counter, 2, 2, 2],
                backgroundColor: [
                    "#227872",
                    "#782228",
                    "#FFC93F",
                    "#87A957",
                ],
                display: true,
                borderColor: "#D1D6DC"
            }
        ]
    };

    const options = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 85,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
            }
        }

    };

    Chart.pluginService.register({
        beforeDraw: function (chart) {
            const width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx
            ctx.font = 1.8 + "em sans-serif";
            ctx.textBaseline = "bottom";
            ctx.fillStyle = "#333";
            ctx.fillText(`${counter + 6}`, width / 2 - 10, height / 2 + 65);
            ctx.fillText(`تعداد کل اقدامات انجام شده`, width / 2 - 130, height / 2 + 100);
            ctx.save();
        }
    });

    return (
        <>
            <Paper elevation={0}>
                <Doughnut
                    width={200}
                    height={80}
                    id={id}
                    data={data}
                    options={{
                        responsive: true,
                        onClick: (evt, element) => {
                            if (element.length > 0) {
                                var ind = element[0].index;
                                console.log(ind);
                            }
                        },
                        ...options
                    }}
                />
            </Paper>
        </>
    );
};

export default Gauge;