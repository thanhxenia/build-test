import { useState, useEffect } from 'react';
import { ItemPerson } from './ItemPerson';
import { isEmpty } from "lodash";

export const ListPerson = () => {
    const [data, getData] = useState([])
    const [loading, setLoading] = useState(true);
    
    const setData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json()
            const results = data.results;
            getData(results);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setData();
    }, []);

    const renderContent = (data: Array<Item>) => {
        if(!isEmpty(data)) {
            return (
                <>
                    <h2 className="t-heading__block">List person</h2>
                    <div className="c-person__item c-person-header">
                        <p className="c-person__item--name">Name</p>
                        <p className="c-person__item--height">Height</p>
                        <p className="c-person__item--skin">Skin Color</p>
                        <p className="c-person__item--hair">Hair Color</p>
                        <p className="c-person__item--gender">Gender</p>
                        <p className="c-person__item--eye">Eye Color</p>
                        <p className="c-person__item--birth">Birth Year</p>
                    </div>
                    {data.map((item: Item, index: number) => (
                        <ItemPerson
                            key={index}
                            item={item}
                        />
                    ))}
                </>
            )
            
        }
        return <div>Empty</div>;
    }

    const body = (
        <div className="c-person">
            {!loading ? renderContent(data as Array<Item>) : <span>loading data...</span>}
        </div>
    );

    return body;
};

interface Item {
    name: string;
    height: string;
    skin_color: string;
    hair_color: string;
    gender: string;
    eye_color: string;
    birth_year: string;
}