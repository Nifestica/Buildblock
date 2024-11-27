

export const lineChartData = {
    labels: [
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thurdays",
        "Fridays",
        "Saturdays",
        "Sunday",
    ],
    datasets: [
        {
            label: "Steps by Faith",
            data: [3000, 5000, 4500,6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Nifesimi",
            data: [3000, 5000, 5500,8000, 10000, 10000, 11000],
            borderColor: "rgb(33, 29, 134)",
        },
    ],
};

 export const BarChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [1200, 300, 150, 180, 100],
            backgroundColor: ["rgba(150, 86, 100, 0.2)",
                "green",
                "blue",
                "red,",
                "rgba(75, 206,86, 0.9)",
            ],
            borderColor:[
                "white",
                "black",
                "pink",
                "black",
                "#095740",
            ],
            borderWidth:1,
        }
    ],
};

export const PieChartData = {
labels: ["Very Likely", "Somewhat Likely", "Neutral", "Somewhat Unlikely", "Very Unlikely"],
datasets: [
    {
        label: "Time Spent",
    data: [65,20,10,3,2,],
    backgroundColor: [
                "#42468B",
                "#6369D1",
                "#7D82D9",
                "#B1B4E8",
                "#C2C4E4",
    ],
    borderColor:[
        "white",
        "white",
        "white",
        "white",
        "#FFF",
    ],

    hoverOffset: 4,
 },
],
};