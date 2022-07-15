import { useState, useEffect } from 'react';
import { ItemPerson } from './ItemPerson';
import { ItemPersonGrid } from './ItemPersonGrid';
import { isEmpty } from "lodash";

export const ListPerson = () => {
    const [data, getData] = useState([])
    const [type, setType] = useState('list')
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
            if(type === "list") {
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
            return (
                <>
                    <h2 className="t-heading__block">Grid person</h2>
                    <div className="c-person__item--box">
                        {data.map((item: Item, index: number) => (
                            <ItemPersonGrid
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                </>
            )
            
        }
        return <div>Empty</div>;
    }

    

    const body = (
        <div className="c-person">
            {!loading ? (
                <>
                    <div className="c-person--action">
                        <button onClick={() => setType('list')}><i className="fa fa-bars"></i> List</button>
                        <button onClick={() => setType('grid')}><i className="fa fa-th-large"></i> Grid</button>
                    </div>
                    { renderContent(data as Array<Item>) }
                </>
            ) : <span>loading data...</span>}
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