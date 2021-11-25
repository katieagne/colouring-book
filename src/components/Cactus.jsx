import React from "react";

export default function Cactus(props) {
  console.log(props);
  return (
    <svg
      viewBox="0 0 1920 1920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="cactus"
    >
      <title>Cactus Template</title>

      <path
        id="svg_1"
        onClick={() => props.newFill(0)}
        d="M1084.2 433.5C1071.9 416.8 1035 422.8 997.9 446C997.9 445.6 997.9 445.1 997.9 444.7C997.9 393.8 979.2 352.5 956.1 352.5C933 352.5 914.3 393.8 914.3 444.7C914.3 445.6 914.3 446.5 914.3 447.3C876.6 427.4 840.5 424.2 829.4 441.3C816.9 460.7 841.4 498.8 884.1 526.5C911.3 544.1 939.3 553.1 959.3 552.5C979.5 552.6 1007.8 541.8 1034.7 522C1075.8 491.7 1097.9 452.1 1084.2 433.5Z"
        fill={props.fillColour[0]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_2"
        onClick={() => props.newFill(1)}
        d="M1195.3 1039.3C1195.3 742.2 1157.9 501 957.8 501.3C745.3 501.7 720.3 742.1 720.3 1039.3C720.3 1107.3 725.9 1157.5 736 1194.7H1179.6C1189.8 1157.6 1195.3 1107.3 1195.3 1039.3Z"
        fill={props.fillColour[1]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_3"
        onClick={() => props.newFill(2)}
        d="M787.5 1070.1C787.5 762 831.5 512.6 885.9 512.6"
        fill={props.fillColour[2]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_4"
        onClick={() => props.newFill(3)}
        d="M1117 1070.1C1117 762 1073 512.6 1018.6 512.6"
        fill={props.fillColour[3]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_5"
        onClick={() => props.newFill(4)}
        d="M957.8 1070.1V501.4"
        fill={props.fillColour[4]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_6"
        onClick={() => props.newFill(5)}
        d="M1173.5 1567H740.9L677 1082.3H1237.5L1173.5 1567Z"
        fill={props.fillColour[5]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_7"
        onClick={() => props.newFill(6)}
        d="M1244.7 1163.5H670.8L654.8 1057.3H1264.5L1244.7 1163.5Z"
        fill={props.fillColour[6]}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <path
        id="svg_8"
        onClick={() => props.newFill(7)}
        d="M796.679 1385.43C801.986 1424.09 803.386 1459.54 801.366 1485.6C800.355 1498.64 798.491 1509.29 795.846 1516.82C794.524 1520.59 793.015 1523.54 791.34 1525.62C789.668 1527.7 787.857 1528.86 785.923 1529.13C783.988 1529.39 781.93 1528.76 779.761 1527.21C777.588 1525.66 775.339 1523.22 773.05 1519.95C768.474 1513.42 763.807 1503.65 759.321 1491.37C750.353 1466.82 742.148 1432.3 736.841 1393.64C731.534 1354.99 730.134 1319.53 732.154 1293.47C733.165 1280.44 735.029 1269.78 737.674 1262.25C738.997 1258.49 740.505 1255.53 742.18 1253.45C743.853 1251.38 745.664 1250.21 747.598 1249.95C749.532 1249.68 751.59 1250.32 753.76 1251.86C755.932 1253.41 758.182 1255.85 760.47 1259.12C765.046 1265.66 769.713 1275.42 774.199 1287.7C783.167 1312.25 791.372 1346.77 796.679 1385.43Z"
        fill={props.fillColour[7]}
        fillRule="evenodd"
      />
      <path
        id="svg_9"
        onClick={() => props.newFill(8)}
        d="M766.2 1207.5C766.2 1220.04 756.037 1230.2 743.5 1230.2C730.963 1230.2 720.8 1220.04 720.8 1207.5C720.8 1194.96 730.963 1184.8 743.5 1184.8C756.037 1184.8 766.2 1194.96 766.2 1207.5Z"
        fill={props.fillColour[8]}
        fillRule="evenodd"
      />
    </svg>
  );
}
