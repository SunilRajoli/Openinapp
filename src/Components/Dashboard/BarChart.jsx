import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import toast from "react-hot-toast";

function BarChart() {
    const [options, setOptions] = useState({
        color: ["#b3ffd9", "#4d94ff"],
        chart: {
            background: "transparent",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [],
        },
        legend: {
            position: "top",
        },
        grid: {
            show: false,
        },
    })

    const [series, setSeries] = useState([
        {
            name: "Guest",
            data: [],
        },
        {
            name: "User",
            data: [],
        },
    ])

    useEffect(() => {
        const price = [];
        const stock = [];
        const title = [];

    axios.get("https://dummyjson.com/products")
    .then((response) => {
      const slicedProducts = response.data.products.slice(0, 4);
      console.log(slicedProducts);
      slicedProducts.map((item) => {
        price.push(item.price);
        stock.push(item.stock);
        title.push(item.title);
        return item;
      });

      setOptions({
        color: ["#b3ffd9", "#4d94ff"],
        chart: {
          background: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: title,
        },
        legend: {
          position: "top",
        },
        grid: {
          show: false,
        },
      });
      setSeries([
        {
          name: "Price",
          data: price,
        },
        {
          name: "Stock",
          data: stock,
        },
      ]);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to fetch data.");
    });
    }, []);

    return(
        <div className="xl:w-[1000px] lg:w-[900px] max-xs:w-[85%] h-[359px] flex-shrink-0 rounded-[20px] border-[2px] border-[#e0e0e0] bg-white mt-[40.83px] lg:shadow-none max-xs:shadow-xl">
            <div className="xl:w-[1000px] lg:w-[900px] h-[359px] ml-[40px] pt-[30px]">
                <span className="w-[93px] text-black font-montserrat text-[18px] font-bold">
                    Activities
                </span> <br />
                <span className="w-[93px] text-black font-montserrat text-[18px]">
                    May - June 2021
                </span>
                
                <Chart 
                    options={options}
                    series={series}
                    type="bar"
                    height="212px"
                    width="921px"
                />
            </div>
        </div>
    )
}

export default BarChart;