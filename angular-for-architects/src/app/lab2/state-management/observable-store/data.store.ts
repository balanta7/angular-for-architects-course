import { Injectable } from "@angular/core";
import { ObservableStore } from "@codewithdan/observable-store";
import { Data, DataValue } from "./data.model";

@Injectable()
export class DataStore extends ObservableStore<Data> {
    private initialState: Data = {data: null};

    constructor() {
        super({ trackStateHistory: true });
        
        this.setState(this.initialState, 'init_state');
    }

    public addDataToStore(data: DataValue): void {
        this.setState({data}, 'add_data');
    }

    public removeDataFromStore(): void {
        this.setState(this.initialState, 'remove_data');
    }

    public getDataFromStore(): DataValue | null {
        return this.getState().data;
    }

}