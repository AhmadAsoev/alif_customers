import axios from "axios"

export async function AddCustomerAPI(
    phone,
    firstName,
    lastName,
    middleName,
    gender,
    email,
) {
    try {
        const response = await axios.post(
            'http://localhost:3000/customers',
            {
                first_name: firstName,
                last_name: lastName,
                middle_name: middleName,
                gender: gender,
                phone: phone,
                email: email,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        return response
    } catch (error) {
        throw error
    }
}

export async function CustomerListAPI() {
    try {
        const response = await axios.get('http://localhost:3000/customers')

        const responseData = response.data

        return responseData
    } catch (error) {
        console.log('Cant get directors, error is ', error)
    }
}
