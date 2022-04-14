import { Divider } from './stories/Divider';

function App() {
    return (
        <div className='App'>
            <br />
            <Divider>Label</Divider>
            <br />
            <Divider align='start'>Start</Divider>
            <Divider align='center'>Center</Divider>
            <Divider align='end'>End</Divider>
            <br />
            <Divider lineStyle='solid'>Solid</Divider>
            <Divider lineStyle='dotted'>Dotted</Divider>
            <Divider lineStyle='dashed'>Dashed</Divider>
            <br />
            <Divider lineWeight='light'>Light</Divider>
            <Divider lineWeight='regular'>Regular</Divider>
            <Divider lineWeight='heavy'>Heavy</Divider>
            <br />
            <Divider lineStyle='dotted' lineWeight='light'>
                <i className='bi bi-bookmark-heart-fill text-primary'></i>
            </Divider>
            <Divider>
                <div className='d-flex text-info'>
                    <i className='bi bi-arrow-left-short'></i>
                    <i className='bi bi-bluetooth'></i>
                    <i className='bi bi-arrow-right-short'></i>
                </div>
            </Divider>
            <Divider align='start' lineStyle='dashed' lineWeight='heavy'>
                <i className='bi bi-calendar-fill'></i>
            </Divider>
        </div>
    );
}

export default App;
