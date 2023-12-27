
export const useRecoveryPassword = () => {
    // token
    const tk = localStorage.getItem('authToken') ?? '';
    const recoveryPass = async (email:string) => {
        try {
            // recuperar contraseña
            const rp = await fetch('http://localhost:3000/admin/recoveryPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tk,
                },
                body: JSON.stringify({email})
            });

            const data = await rp.json();
            
            if(!rp.ok) {
                return data.error;
            }

            return data.message;

        } catch (error) {
            console.error(error)
        }
    }

    const resetPass = async (newPassword: string) => {

        const url = location.href.replace('5173','3000');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newPassword})
            })

            const data = await response.json();

            if(!response.ok) {
                return data.error;
            }

            return data.message;

        } catch (error) {
            console.error(error)
        }
    }

    return {recoveryPass, resetPass}
}
