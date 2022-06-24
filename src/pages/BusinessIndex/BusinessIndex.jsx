import { BusinessCard } from "../../components/BusinessCard/BusinessCard";

const BusinessIndex = ({ business }) => {
    return (
        <div>
            <div className="businesses-container">
                {business.map((biz, idx) => {
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
