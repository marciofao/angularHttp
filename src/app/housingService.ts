import {Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class HousingService{
    url = "http://localhost:3000/locations";

    constructor(){    }

    async getAllHousingLocations():Promise<HousingLocation[]>{
        const data = await fetch(this.url);
        return await data.json() ?? [];
    }

    async getHousingLocationById(id:Number):Promise<HousinLocation|undefined>{
            return data = await fetch('${this.url}/${id}');
            return await data.json()

    }
}