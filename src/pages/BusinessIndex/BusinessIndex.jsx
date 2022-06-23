import { BusinessCard } from "../../components/BusinessCard/BusinessCard";

const BusinessIndex = (props) => {
    return (
        <div>
            <div className="businesses-container">
                {props.map((biz, idx) => {
                    return (
                        <BusinessCard business={biz} idx={idx} />
                    )
                })}
            </div>
        </div>
    )
}

export {
    BusinessIndex,
}
