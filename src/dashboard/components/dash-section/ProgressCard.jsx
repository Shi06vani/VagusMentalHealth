import React from "react";
import ReactApexChart from "react-apexcharts";

const ProgressCard = () => {
  const series = [62, 39]; // Scheduled, Completed

  // const options = {
  //   chart: {
  //     type: "donut",
  //   },
  //   labels: ["Scheduled", "Completed"],
  //   colors: ["#F37979", "#FDE5C8"],
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   stroke: {
  //     width: 0,
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: "70%",
  //         labels: {
  //           show: true,
  //           name: {
  //             show: true,
  //             offsetY: -10,
  //             color: "#333",
  //             fontSize: "16px",
  //             formatter: () => "Sessions",
  //           },
  //           value: {
  //             show: false,
  //           },
  //           total: {
  //             show: false,
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  const options = {
    chart: {
      type: "donut",
      
    },
    labels: ["Scheduled", "Completed"],
    colors: ["#F37979", "#FDE5C8"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: -10,
              color: "#333",
              fontSize: "16px",
              formatter: () => "Sessions",
            },
            value: {
              show: false,
            },
            total: {
              show: false,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1280, // Tablets
        options: {
          chart: {
            width: 130,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "60%",
                labels: {
                  name: {
                    fontSize: "14px",
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1024, // Tablets
        options: {
          chart: {
            width: 130,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "60%",
                labels: {
                  name: {
                    fontSize: "14px",
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 768, // Mobile
        options: {
          chart: {
            width: 140,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "60%",
                labels: {
                  name: {
                    fontSize: "12px",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#FEFEFEB2] font-poppins rounded-[30px] p-4 w-full h-full  sm:max-w-md shadow-sm">
      <h2 className="text-[#3E3E3ECC] font-medium text-base sm:text-lg lg:text-xl mb-10 lg:mb-4">
        PROGRESS
      </h2>

      <div className="flex lg:flex-col xl:flex-row justify-between  sm:gap-8 lg:gap-3">
        {/* Left Labels */}
        <div className="flex flex-col gap-4 text-sm text-gray-800">
          <div>
            <div className=" text-base text-[#3E3E3E] border-l-[3.5px] border-[#FDCFA5] pl-2 font-medium">
              39%
              <div className=" text-[#3E3E3ECC] font-normal text-xs sm:text-sm">
                Completed
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px]   border-[#F37979] text-base text-[#3E3E3E] border-l-[3.5px]  pl-2 font-medium">
              62%
              <div className=" text-[#3E3E3ECC] font-normal text-xs sm:text-sm ">
                Scheduled
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex-0 flex justify-end items-end xl:justify-start xl:items-start">
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              height={170}
              width={160}
            />
          </div>
          {/* Donut Chart */}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
