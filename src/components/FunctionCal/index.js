import { Button, Divider, Input, Row, Radio } from 'antd';
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';

import styles from './index.less';

export default function FunctionCal() {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const mRef = useRef(null);
  const nRef = useRef(null);
  const [result, setResult] = useState([]);
  const [type, setType] = useState(1);
  const calculate = () => {
    const a = Number.parseFloat(_.get(aRef, 'current.input.value'));
    const b = Number.parseFloat(_.get(bRef, 'current.input.value'));
    const c = Number.parseFloat(_.get(cRef, 'current.input.value'));
    const d = Number.parseFloat(_.get(dRef, 'current.input.value'));
    const m = Number.parseFloat(_.get(mRef, 'current.input.value'));
    const n = Number.parseFloat(_.get(nRef, 'current.input.value'));
    if (type === 1) {
      const newResult = [
        (b * n - d * m) / (b * c - a * d),
        (a * n - c * m) / (a * d - b * c),
      ];
      setResult(newResult);
    } else if (type === 2) {
      const newResult = [
        (-b + Math.sqrt(b * b - 4 * a * m)) / (2 * a),
        (-b - Math.sqrt(b * b - 4 * a * m)) / (2 * a),
      ];
      setResult(newResult);
    }
  };
  const changeType = (e) => {
    setType(e.target.value);
  };
  const twoX = (
    <>
      <Row>
        <Input ref={aRef}></Input>x+<Input ref={bRef}></Input>y=
        <Input ref={mRef}></Input>
      </Row>
      <Row>
        <Input ref={cRef}></Input>x+<Input ref={dRef}></Input>y=
        <Input ref={nRef}></Input>
      </Row>
    </>
  );
  const Xpow = (
    <>
      <Row>
        <Input ref={aRef}></Input>x**2+<Input ref={bRef}></Input>x+
        <Input ref={mRef}></Input>=0
      </Row>
    </>
  );
  useEffect(() => {}, [type]);
  return (
    <>
      <Row>
        <Radio.Group onChange={changeType} value={type}>
          <Radio.Button value={1}>二元一次</Radio.Button>
          <Radio.Button value={2}>一元二次</Radio.Button>
        </Radio.Group>
      </Row>
      {type === 1 ? twoX : Xpow}
      <Button onClick={calculate}>计算</Button>
      <Divider />
      <Row>
        x=<span>{result[0]}</span>
      </Row>
      <Row>
        y=<span>{result[1]}</span>
      </Row>
    </>
  );
}
