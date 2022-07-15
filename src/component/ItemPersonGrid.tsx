export const ItemPersonGrid = (prop: Person) => {
    const body = (
        <div className="c-person__item--grid">
            <p className="c-person__item--name"><span>Name: </span>{prop.item?.name}</p>
            <p className="c-person__item--height"><span>Height: </span>{prop.item?.height}</p>
            <p className="c-person__item--skin"><span>Skin Color: </span>{prop.item?.skin_color}</p>
            <p className="c-person__item--hair"><span>Hair Color: </span>{prop.item?.hair_color}</p>
            <p className="c-person__item--gender"><span>Gender: </span>{prop.item?.gender}</p>
            <p className="c-person__item--eye"><span>Eye Color: </span>{prop.item?.eye_color}</p>
            <p className="c-person__item--birth"><span>Birth Year:</span>{prop.item?.birth_year}</p>
        </div>
    );

    return body;
};

interface Person {
    item: {
        name: string;
        height: string;
        skin_color: string;
        hair_color: string;
        gender: string;
        eye_color: string;
        birth_year: string;
    }
}