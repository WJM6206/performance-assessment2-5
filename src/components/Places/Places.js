import React, { Component } from "react";
import './Places.css';
 
class Places extends Component {
  render() {
    return (
        <div className="places">
            <div>
                <h2 >Dubai</h2>
                <p>Dubai is a fun city that I have visited I believe about 7 times. I have had fun at the Wild Wadi Water
                    Park, gone go-cart racing at the Dubau Autodrome, and taken a ride up the elevator to the observation
                    deck of the world's tallest building, The Burj Khalifa.
                </p>
            </div>
            <div>
                <h2 >Italy</h2>
                <p>Italy was extremely fun as I took a time machine to the old days. Touring the ancient Pompei ruins 
                    gave me a better look on how we live our lives today. Rich in its history and preserved by the 
                    ashes of Mount Vesuvius' eruption long ago. Climbing to the top of Mount Vesuvius was also a 
                    blast. It is still dormant with a little bit of steam coming out from the center of the creater
                    at the top.
                </p>
            </div>
            <div>
                <h2 >Bahrain</h2>
                <p>Bahrain is the second most visited place for me. There wasn't a whole lot that I took away from 
                    here except beautiful desert scenery. The Tree of Life is located here and one long journey out
                    into the middle of nowhere in the desert brought us there. It was a tree in the desert!
                </p>
            </div>
            <div>
                <h2 >Turkey</h2>
                <p>Antalya, Turkey was so much fun as this is where I went white water rafting for the first time.
                    The ship was parked down in the cove and I embarked on a bus ride up a winding mountain road.
                    As we were reaching the top of our accent on this road, you could see the ship below and it
                    small which is a feat for an Aircraft carrier. 
                </p>
            </div>
        </div>
    );
  }
}
 
export default Places;