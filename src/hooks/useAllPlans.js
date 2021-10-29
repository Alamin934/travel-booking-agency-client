import { useEffect, useState } from "react";

const useAllPlans = () => {
    const [plans, setPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allPlans')
            .then(res => res.json())
            .then(data => {
                setPlans(data);
                setIsLoading(data);
            })
    }, []);

    return {
        plans,
        isLoading
    }

};

export default useAllPlans;