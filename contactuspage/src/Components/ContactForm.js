
import Button from './Button/Button.js';
import './ContactForm.css';
const ContactForm =() => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (

        <section className="container_section">
            <div className="contact_form">
                <div className="top_btn">
                    <Button text="VIA CALL"></Button>
                    <Button text="VIA SUPPORT CHAT"></Button>
                    
                </div>
                <Button 
                isoutline={true}
                text="VIA EMAIL"></Button>

                <form onSubmit={onSubmit}>
                    <div className='form_controler'>
                        <label htmlFor="name">Name</label>
                        <input type='text'></input>
                    </div>

                    <div className='form_controler'>
                        <label htmlFor="name">Email</label>
                        <input type='mail'></input>
                    </div>

                    <div className='form_controler'>
                        <label htmlFor="name">Text</label>
                        <textarea></textarea>
                    </div>
                  
                 <div
                 style={{
                    display : "flex",
                    justifyContent : 'end',
                    margin: '10px auto',
                 }}>
                         <Button text="Submit btn"></Button>
                 </div>
                </form>
            </div>

            <div className="image">
                <img src={process.env.PUBLIC_URL + "/Images/contact.svg"} alt=''></img>
            </div>

        </section>
    );
};

export default ContactForm;