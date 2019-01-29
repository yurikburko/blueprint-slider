import * as React from 'react';
import {MultiSlider} from "./slider/components";
import {Intent} from "./slider/common";

export interface SystemListEntity {
    Id: number;
    Name: string;
    Order?: number;
}
export interface Threshold extends SystemListEntity {
    Color: string;
    Value: number;
    IsInternal?: boolean;
}

export interface RLSliderProps {

    updateThresholdValue?: (id: number, value: number) => any;
}
export interface RLSliderState {
    items: Threshold[];
}

export class RLSlider extends React.Component<RLSliderProps, RLSliderState> {
    constructor(props: RLSliderProps) {
        super(props);
        this.state = {
            items: [
                {Id: 1, Name: "tr1", Color: "red", Value: 0},
                {Id: 2, Name: "tr2", Color: "green", Value: 30},
                {Id: 3, Name: "tr3", Color: "blue", Value: 60},
                {Id: 4, Name: "tr4", Color: "yellow", Value: 80},
                {Id: 5, Name: "tr5", Color: "brown", Value: 100},
            ]

        };
    }

    onAfterChange = () => {

    }

    onChange = (values: number[]) => {
        const currentItems = this.state.items;
        const items = currentItems.map((t, i) => ({...t, Value: values[i]}));
        this.setState({items});
    }

    renderLabel = (val: number)=> {
        return `${val}%`;
    }

    render() {

        return (
            // RangeSlider looks roughly like this:
            <MultiSlider
                onChange={this.onChange}
                min={0}
                max={100}
                stepSize={10}
                labelStepSize={100}
                showTrackFill={false}
                labelRenderer={this.renderLabel}
                renderAxisLabels={false}
            >
                {this.state.items.map((t) =>
                    <MultiSlider.Handle value={t.Value} type="full" intentAfter={Intent.PRIMARY} key={t.Id}/>
                )}
            </MultiSlider>
        );
    }
}