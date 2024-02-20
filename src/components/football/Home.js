import React from 'react';
export default function Home() {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className='text-[#DEF5FF] text-lg ml-2 h-screen'>
            <p className='mb-5 mt-5'>
                Auf dieser Website unter Table sehen Sie, wie die aktuellen Positionen der Teams in der Bundesliga sind.<br></br>
                Unter dem Punkt Clubs haben Sie alle Teams aufgelistet.
            </p>

            <button className='bg-[#4DB4FF] mb-3 p-2' onClick={() => setVisible(!visible)}>
                {visible ? 'Weniger erfahren' : 'Mehr erfahren'}
            </button>
            {visible && 
            <div>
                Mehr gibt es nicht zu erfahren!
            </div>
            }
        </div>
    )
}
