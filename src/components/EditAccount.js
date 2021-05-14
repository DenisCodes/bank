import React from 'react';




export function EditAccount() {

    const accountId = pathname.replace("/AccountList/", "");

    const user = useSelector((state) =>
        state.account.find((user) => account.id === accountid)
    );
    const [name, setName] = useState(user.name);
    const [amount, setAmount] = useState(user.amount);
    const [error, setError] = useState(null);
    const handleName = (e) => setName(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);

    const handleClick = () => {
        if (name && amount) {
            dispatch(
                userUpdated({
                    id: accountId,
                    name,
                    amount,
                })
            );

            setError(null);

        } else {
            setError("Fill in all fields");
        }

        setName("");
        setAmount("");
    };