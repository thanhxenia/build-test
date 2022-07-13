export const ItemPerson = (prop: Person) => {
    const body = (
        <div className="c-person__item">
            <p className="c-person__item--name">{prop.item?.name}</p>
            <p className="c-person__item--height">{prop.item?.height}</p>
            <p className="c-person__item--skin">{prop.item?.skin_color}</p>
            <p className="c-person__item--hair">{prop.item?.hair_color}</p>
            <p className="c-person__item--gender">{prop.item?.gender}</p>
            <p className="c-person__item--eye">{prop.item?.eye_color}</p>
            <p className="c-person__item--birth">{prop.item?.birth_year}</p>
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