
function toggleChartHeight() {
    chartElems.forEach(el => {
        if (el.classList.contains('chart-default')) {
            el.classList.remove('chart-default');
            el.classList.add('chart-alt');
        } else {
            el.classList.remove('chart-alt');
            el.classList.add('chart-default');
        }
    });
}


const optsNoAnimation = {
    xAxis: { type: "value" },
    yAxis: { type: "value" },
    series: [{ type: "scatter", data: Array.from({ length: 10000 }, (_, i) => [i, i]) }],
};

const optsWithAnimation = {     
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yAxis: {type: "value"},
    series: [{data: [150, 230, 224, 147, 260], type: "line"}],
    animationDuration: 5000,
};


// chart11 - optsNoAnimation - simple resize observer
const el11 = document.getElementById("chart11");
const chart11 = echarts.init(el11);
const resizeObserver11 = new ResizeObserver(chart11.resize).observe(el11);
const chart11_opts = structuredClone(optsNoAnimation);
chart11_opts.title={subtext:"on load: renders once\non resize: re-renders once"}
chart11.setOption(chart11_opts);
// chart11.setOption(optsNoAnimation);

// chart12 - optsWithAnimation - simple resize observer
const el12 = document.getElementById("chart12");
const chart12 = echarts.init(el12);      
const resizeObserver12 = new ResizeObserver(chart12.resize).observe(el12);
const chart12_opts = structuredClone(optsWithAnimation);
chart12_opts.title={subtext:"on load: renders once, **broken animation** \non resize: no re-rendering"}
chart12.setOption(chart12_opts);
// chart12.setOption(optsWithAnimation);

// chart21 - optsNoAnimation - on_off createResizeObserver
const el21 = document.getElementById("chart21");
const chart21 = echarts.init(el21);      
const createResizeObserver21 = () => {
    new ResizeObserver(chart21.resize).observe(el21);
    chart21.off("finished", createResizeObserver21);
};
chart21.on("finished", createResizeObserver21);
const chart21_opts = structuredClone(optsNoAnimation);
chart21_opts.title={subtext:"on load: **renders twice**\non resize: re-renders once"}
chart21.setOption(chart21_opts);     
// chart21.setOption(optsNoAnimation);
  
// chart22 - optsWithAnimation - on_off createResizeObserver
const el22 = document.getElementById("chart22");
const chart22 = echarts.init(el22);
const createResizeObserver22 = () => {
    new ResizeObserver(chart22.resize).observe(el22);
    chart22.off("finished", createResizeObserver22);
};
chart22.on("finished", createResizeObserver22);      
const chart22_opts = structuredClone(optsWithAnimation);
chart22_opts.title={subtext:"on load: renders once, nice animation \non resize: no re-rendering"}
chart22.setOption(chart22_opts);
chart22.setOption(optsWithAnimation);


const chartElems = [el11, el12, el21, el22];