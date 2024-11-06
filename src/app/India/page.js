import "@/Css/Components.css"

import Image from "next/image";

const IndiaFacts = () => {
    return (
        <div className="components">

            <h1 className="components-headline">All About India !</h1>

            <ol>
                <li className="ordered-list"><span className="red">Delhi</span> is the <span className="greenish">Capital City</span> of India.</li>
                <Image alt={"alt"}className="image" src="/About India/delhi.jpg" height={200} width={200} />

                <li className="ordered-list">India rank <span className="red">1st Place</span> in terms of <span className="greenish"> Population</span>.</li>


                <li className="ordered-list">India is <span className="red">7th Largest Country</span> in the world in <span className="greenish"> terms of Area</span>.</li>


                <li className="ordered-list">It has <span className="red">28 States </span> and  <span className="red">8 Union Territories</span> ..</li>

                
                <p className="paragraph"><span className="greenish">Jammu & Kashmir</span> is included in <span className="red"> Union Territories</span> from <span className="red"> October 2019 </span> after removal of <span className="red">Article 370</span>.</p>
                <p className="paragraph">According to <span className="red">Article 370</span>, State Government have more power than the Central Government, and Central Government have to take permission from State Government to perform activities.</p>
                <p className="paragraph">Removal of <span className="red">Article 370</span> was decided by Parliament of India on August 2019, and the reorganisation took effect from <span className="red">31 October 2019</span>.</p>

                
                <li className="ordered-list">India has <span className="red">World&apos;s Largest Statue</span>, i.e., <span className="greenish">Statue of Unity of Sardar Vallabhbhai Patel</span>.</li>
                <p className="paragraph">Statue of Unity is situated in <span className="red">Gujarat</span> at the Bank of <span className="greenish">Narmada River</span>.</p>
                <Image alt={"alt"}className="image" src="/About India/statueOfUnity.jpg" height={200} width={200} />


                <li className="ordered-list"><span className="red">Goa</span> is the <span className="greenish">smallest</span> while <span className="red">Rajasthan</span> is the <span className="greenish">largest</span> state.</li>
                <Image alt={"alt"}className="image" src="/About India/Goa.jpg" height={200} width={200} />
                <Image alt={"alt"}className="image" src="/About India/Rajasthan.jpg" height={200} width={200} />


                <li className="ordered-list"><span className="red">Ganga River</span> is the <span className="greenish">Longest River</span> and <span className="red">Godawari</span> is the <span className="greenish">2nd Longest River</span> while <span className="red">Arvali River</span> of Rajasthan is the <span className="greenish">Shortest River</span>.</li>
                <Image alt={"alt"}className="image" src="/About India/ganga.jpg" height={200} width={200} />
                <Image alt={"alt"}className="image" src="/About India/godavari.jpg" height={200} width={200} />
                <Image alt={"alt"}className="image" src="/About India/aravali.jpg" height={200} width={200} />


                <li className="ordered-list"><span className="red">Brahmaputra River</span> is the <span className="greenish">Deepest River</span>.</li>
                <Image alt={"alt"}className="image" src="/About India/Brahmaputra.jpg" height={200} width={200} />

                
                <li className="ordered-list">India is <span className="red">sorrounded by 9 neighboring countries</span>. These are - <span className="greenish">Afghanistan, Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar, Maldives and Sri Lanka</span>.</li>
                <Image alt={"alt"}className="image" src="/About India/neighboursOfIndia.jpg" height={200} width={200} />
                
                
                <li className="ordered-list">India is <span className="red">sorrounded by 3 Oceans</span>. These are - <span className="greenish">Arabian Sea, Bay of Bengal, and Indian Ocean</span>.</li>
                <Image alt={"alt"}className="image" src="/About India/oceans.jpg" height={200} width={200} />
            </ol>

        </div>
    );
}

export default IndiaFacts;