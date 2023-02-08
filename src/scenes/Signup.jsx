import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { Form, Button, Input } from 'antd'

const firebaseConfig = {
    apiKey: "AIzaSyDinbj2CLhBWCuR6kdO_hIk-6hImXWw__E",
    authDomain: "simple-login-ah.firebaseapp.com",
    projectId: "simple-login-ah",
    storageBucket: "simple-login-ah.appspot.com",
    messagingSenderId: "436712694793",
    appId: "1:436712694793:web:c13654e12be83f837744d8"
  };


export default function Signup({setUser, setIsUser}){
    const handleSubmit = async ({ email, password }) => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const _user = await createUserWithEmailAndPassword(auth, email, password)
        .catch(alert)
        console.log(_user)
       setUser(_user.user)
    }
return(
    <section>
        <h1>SignUp</h1>
        <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email"> 
        <Input type='email' />
        </Form.Item>
        <Form.Item label="Password" name="password"> 
        <Input.Password />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType='submit'>Sign Up</Button>
        </Form.Item>
        </Form>
        <p>Already a user ? <Button onClick={() => setIsUser(true)}>Login</Button></p>
    </section>
)
}