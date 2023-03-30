   showError is used to alert the user and show message error in case they did not choose any plans
    const [showError, setShowError] = useState(() => {
        const storedValue = window.localStorage.getItem("Error_Message_For_Plan_Component");
        return storedValue !== null ? JSON.parse(storedValue) : false;
    });
    useEffect(() => {
        window.localStorage.setItem("Error_Message_For_Plan_Component", JSON.stringify(showError));
    }, [showError]);






    userSelectedPeriod is used to store the period which user chose 
    const [userSelectedPeriod, setUserSlectedPeriod ] = useState( () => {
        const storedValue = window.localStorage.getItem("User_Selected_Period")
        return storedValue !== null ? JSON.parse(storedValue) : "monthly"
    })
    useEffect (() => {
        window.localStorage.setItem("User_Selected_Period", JSON.stringify(userSelectedPeriod))
        setForm({...formData, ["period"]: userSelectedPeriod})
    },[userSelectedPeriod])





    
    userSelectedPlan is used to store the name of the plan which user selected
    const [userSelectedPlan, setUserSelectedPlan] =useState(() => {
        const storedValue = window.localStorage.getItem("User_Setected_Plan");
        return storedValue !== null ? JSON.parse(storedValue): ""
    })
    useEffect(()=> {
        window.localStorage.setItem("User_Setected_Plan", JSON.stringify(userSelectedPlan))
    },[userSelectedPlan])






    planPrice is used to store the price of the plan which user selected
    const [planPrice, setPlanPrice] = useState (()=>{
        const storedValue = window.localStorage.getItem("Plan_Price")
        return storedValue !== null ? JSON.parse(storedValue) : 0
    })
    useEffect (()=> {
        window.localStorage.setItem("Plan_Price", JSON.stringify(planPrice))
    },[planPrice])



    planHandler medthod is used to assign the name and price of the plan to the variable which are declared above
    and also alow the user to navigate to the next page by switching setIsChosenPlan and setShowError to true
    
    
    const planHandler = (selectedPlan, selectedPrice ) => {
        setForm({...formData, ["plan"]: selectedPlan })
        setIsChosenPlan(true)
        setShowError(false)
        setUserSelectedPlan(selectedPlan)
        setPlanPrice(Number(selectedPrice.match(/\d+/)[0]))
    }








    isChosenPlan is used to store if the user chose plan or not. this variable isuseful
    to prevent the user navigation to the next page if they did not chose any plan
    const [isChosenPlan, setIsChosenPlan] = useState(() => {
        const storedValue = window.localStorage.getItem("Is_User_Chose_One_Plan");
        return storedValue !== null ? JSON.parse(storedValue) : false;
    });
    useEffect(() => {
        window.localStorage.setItem("Is_User_Chose_One_Plan", JSON.stringify(isChosenPlan));

        console.log("the value of context is ")
        console.log(formDataContext)

        
    }, [isChosenPlan]);







    const changeHandler = e => {
        setFormDataContext({...formDataContext, [e.target.name]: e.target.value })
    }


