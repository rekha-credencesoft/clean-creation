import React from "react";
import { TextField } from "@mui/material";
export default class ShippingAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [
                {
                    value: 'Select',
                    label: '--Select--',
                }, {
                    value: 'Louisiana',
                    label: 'Louisiana',
                },
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="shadow p-4 rounded-xl mt-5">
                    <p className="text-xl text-gray-700 font-semibold">My Shipping Address</p>
                    <hr />
                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Street Address</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">City</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">State</label><br />
                            <select name="" id="" className="border h-8 w-full">
                                {this.state.states.map((s) => (
                                    <option key={s.value} value={s.value}>
                                        {s.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Zip Code</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Phone</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3">
                            <label className="text-xs text-gray-500">Gate Code</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>
                        <div className="py-3  mb-10">
                            <label className="text-xs text-gray-500">Delivery Note</label>
                            <TextField id="standard-basic" label="" variant="standard" fullWidth />
                        </div>

                    </div>
                    <div className="absolute lg:right-10 right-3 -mt-12">
                        <button className="bg-teal-500 p-3 text-white rounded-xl">Save Shipping</button>
                    </div>

                </div>
            </div>
        )
    }
}