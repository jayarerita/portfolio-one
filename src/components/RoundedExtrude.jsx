import React, {useMemo} from 'react'
import { Extrude } from '@react-three/drei';
import {Shape} from 'three';

function RoundedExtrude(props) {    

    const shape = useMemo(() => {
        const _shape = new Shape()

        const width = props.width; // total width
        const length = props.length; // total length
        const cornerRad = props.cornerRad; // cannot be greater than 1/2 length or 1/2 width
        _shape.moveTo(cornerRad,0);
        _shape.lineTo(width - cornerRad,0);
        _shape.absarc(width - cornerRad,cornerRad,cornerRad,3 * Math.PI / 2, 0);
        _shape.lineTo(width, length - cornerRad);
        _shape.absarc(width - cornerRad, length - cornerRad, cornerRad, 0, Math.PI / 2);
        _shape.lineTo(cornerRad, length);
        _shape.absarc(cornerRad, length - cornerRad, cornerRad, Math.PI / 2, Math.PI);
        _shape.lineTo(0, cornerRad);
        _shape.absarc(cornerRad, cornerRad ,cornerRad, Math.PI, 3 * Math.PI / 2);
        return _shape;
    }, [])

    const extrudeSettings = useMemo(() => ({
        steps: 1,
        depth: props.depth,
        bevelThickness: 0,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 1,
    }),[]);
  return (
    <Extrude args={[shape, extrudeSettings]} position={props.position}>
        <meshStandardMaterial color={props.color} />
    </Extrude>
  )
}

RoundedExtrude.defaultProps = {
    color: "#fff",
    depth: 1,
    width: 5,
    length: 5,
    cornerRad: 1,
    position: [0,0,0],
}

export default RoundedExtrude