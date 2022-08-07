
import { useState, useEffect } from "react";
import { Pie, PieConfig } from "@ant-design/plots";

interface Props {
  color?: any;
  data?: any | string | [];
}

export const AntPieChart: any = (props: Props) => {
  const { color, data } = props;
  const [allItems, setAllItems] = useState([]);
//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const items: any = data.forEach((item: any) => {

//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     //     setAllItems((prev) => {
//     //     return [...prev, { name: `${item.type}  ${item.value}` }];
//     //   });
//     });
//   }, [data]);


  const config = {
    innerHeight: "10%",
    outerWidth: '10%',
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    color,
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
        // legend: {
    //   layout: "horizontal",
    //   position: "bottom",
    //   items: allItems,
    // },
    // items: [{}],

    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        // content: 'AntV\nG2Plot',
        content: '70%',
      },
    },
  };


//   const config = {
//     appendPadding: 10,
//     data,
//     angleField: "value",
//     colorField: "type",
//     radius: 1,
//     innerRadius: 0.6,
//     label: {
//       type: "inner",
//       offset: "-50%",
//       content: "",
//       autoHide: true,
//     },
//     interactions: [
//       {
//         type: "element-selected",
//       },
//     ],
    //statistic: {
    //  title: false,
    //  content: {
    //    style: {
    //      whiteSpace: "pre-wrap",
    //      overflow: "hidden",
    //      textOverflow: "ellipsis",
    //    },

    //  },
    //},
//     legend: {
//       layout: "horizontal",
//       position: "bottom",
//       items: allItems,
//     },
//     items: [{}],
//     color,
//   };
  return <Pie {...config} />;
};
