import { NavLink } from "react-router-dom";
import calendar from '../img/calendar.jpg';
import organize from '../img/organize.jpg';
import square from '../img/square.jpg';
import tracking from '../img/tracking.jpg';
import schedule from '../img/schedule.jpg';

import './part2under.css'

const Part2under = () => {
    return (
        <>
        <div className = "container">
            <section className="calendar">
                <article className="calendar-left">
                    <div className="calendar-left-container">
                        <p><img src={schedule} alt="schedule" /><img src={tracking} alt="tracking" /></p>
                        <p><img src={organize} alt="organize" /></p>
                        <p><strong>Schedule tasks</strong> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p>
                        <li><img src={square} alt="square" />you can always add new tasks or change the settings of existing ones in your calendar view or the app control panel</li>
                        <li><img src={square} alt="square" />It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals</li>
                        <li><img src={square} alt="square" />Use phone reminders to free up your long term memory which will reduce stress and make you more productive</li>
                        <button className="terms">TERMS</button><button className="privacy">PRIVACY</button>
                    </div>
                </article>
                <article className="calendar-right">
                    <div className="white-circle-container"></div>
                    <div className="circle"><img className="calendar-pic" src={calendar} alt="" /></div>
                    <div />
                </article >
            </section>
        </div>
        </>

    )
}

export default Part2under;