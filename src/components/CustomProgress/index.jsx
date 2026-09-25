import { useState, useRef, useEffect, useImperativeHandle } from "react";
// import clsx from "clsx";
import { Button, Flex, Progress } from "antd";
//内部依赖
import styles from "./index.module.scss";

export const CustomProgress = (props) => {
  const { label, value, strokeColor = "#22D3EE",number="1286420",style={} } = props;

  return (
    <div className={styles.customProgress} style={style}>
      <span className={styles.colorBlock} style={{backgroundColor:strokeColor}}></span>
      <span className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
      </span>
      <Flex style={{flex:1}}>
        <Progress percent={value} size={['100%', 8]} strokeColor={strokeColor} />
      </Flex>
      <span className={styles.numberWrapper}>
        <span className={styles.number}>{number}</span>
      </span>
    </div>
  );
};

export default CustomProgress;
