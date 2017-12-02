import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { ListItem } from 'material-ui/List';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import HeartIcon from 'material-ui/svg-icons/action/favorite';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import UnpublishIcon from 'material-ui/svg-icons/content/undo';
import TimeIcon from 'material-ui/svg-icons/action/date-range';

import OwlCarousel from 'react-owl-carousel';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {pink500} from 'material-ui/styles/colors';
import './Feed.css';

import AvatarExample from '../../img/realtor/realtor.jpg';
import House from '../../img/realtor/house.jpg';
import House01 from '../../img/realtor/slider/01.jpg';
import House02 from '../../img/realtor/slider/02.jpg';
import House03 from '../../img/realtor/slider/03.jpg';
import House04 from '../../img/realtor/slider/04.jpg';
import House05 from '../../img/realtor/slider/05.jpg';
import House06 from '../../img/realtor/slider/06.jpg';
import House07 from '../../img/realtor/slider/07.jpg';
import House08 from '../../img/realtor/slider/08.jpg';

const feedStyle = {
  card: {
    headerText: {
      marginTop: 4
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    tooltip: {
      fontSize: 12
    }
  }
};

const Feed = (props) => {
  return (
    <div className="feed-container">
      <Card expandable>
        <CardHeader
          title="Open House in Vancouver - Shaughnessy"
          subtitle="Amanda Peterson - Realtor"
          textStyle={feedStyle.card.headerText}
          avatar={AvatarExample}
          actAsExpander
          showExpandableButton
        />
        <CardMedia>
          <OwlCarousel
            ref={inst => this.slider = inst}
            className="owl-theme owl-drag"
            items={1}
            loop
            nav
            navText = {[
              '<',
              '>'
            ]}
          >
            <div><img src={House01} alt="" /></div>
            <div><img src={House02} alt="" /></div>
            <div><img src={House03} alt="" /></div>
            <div><img src={House04} alt="" /></div>
            <div><img src={House05} alt="" /></div>
            <div><img src={House06} alt="" /></div>
            <div><img src={House07} alt="" /></div>
            <div><img src={House08} alt="" /></div>
          </OwlCarousel>
        </CardMedia>
        <CardText expandable style={{ paddingTop: 0 }}>
          <Divider style={{ marginBottom: 8 }}/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/1320+W+15th+Ave,+Vancouver,+BC+V6H+1S3/@49.257785,-123.1364278,17z/data=!3m1!4b1!4m5!3m4!1s0x548673bf93ad18d1:0xb973ffc3d2ec2a38!8m2!3d49.257785!4d-123.1342391">
            <ListItem
              leftIcon={<LocationIcon/>}
              primaryText="1320 W 15th Avenue Vancouver, BC, V6H 1S3"
            />
          </a>
          <ListItem
            leftIcon={<TimeIcon/>}
            primaryText="Showing Date: July 2, 11AM - 4PM"
            disabled
          />
          <p className="card-text">Fabulous & modern 4 level, 3 bdrm City Home, nestled in the beautifully manicured First Shaughnessy Estates property. Grand entrance foyer invites you into an open concept living space w/white oak h/w floors, exceptional kitchen, beautiful dining rm & captivating living rm featuring gas f/p w/marble surround & lush garden views. 2nd level offers 2 large bdrms including a master w/double walk-in closets & luxurious 5 pc enste. Enjoy the privacy & functionality of a top level bdrm w/4pc bath & open den boasting N-facing arched windows w/stunning mtn & city views & a large S-facing balcony. Lower level includes a wine cellar, guest bath & access to the secure, underground 2-car garage. Centrally located, close to Granville St’s desirable amenities w/easy access to the ariport & downtown.</p>
        </CardText>
        <Divider/>
        <CardActions style={feedStyle.card.actions}>
          <div className="feed-favorite-count-container">
            <IconButton>
              <HeartIcon color={pink500}/>
            </IconButton>
            <span>264</span>
          </div>
          <div>
            <IconButton tooltip="Unpublish Post" tooltipStyles={feedStyle.card.tooltip}>
              <UnpublishIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
            <IconButton tooltip="Delete Post" tooltipStyles={feedStyle.card.tooltip}>
              <DeleteIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          </div>
        </CardActions>
      </Card>
      <Card expandable>
        <CardHeader
          title="Beautiful Beverly Hills Estate - Tour Video"
          subtitle="Amanda Peterson - Realtor"
          textStyle={feedStyle.card.headerText}
          avatar={AvatarExample}
          actAsExpander
          showExpandableButton
        />
        <CardMedia>
          <iframe width="600" height="338" title="Beverly Hills House Tour" src="https://www.youtube.com/embed/zvL0UmvPSEA" frameBorder="0" allowFullScreen></iframe>
        </CardMedia>
        <CardText expandable style={{ paddingTop: 0 }}>
          <Divider style={{ marginBottom: 8 }}/>
          <p className="card-text">Majestic French Villa with contemporary details, North of Sunset in Beverly Hills. Located on the best cul-de sac in the Estate Section, this Europeangem is the finest available today. Long private driveway, large motor court and complete privacy on approx. 1 acre. Designed for grand entertaining. The property has generous public rooms with high ceilings all opening to vast terraces and gardens. Wrought iron doors greet visitors to a 2 story entry hall w/limestone floors and sculptural staircase. Double formal living room, gorgeous dining room, screening room/lounge and a distinguished wood paneled library are the perfect backdrop for large events. A gourmet kitchen and breakfast area. Beautiful pool and fountains w/European gardens. Additional features include a spacious master suite w/dual marble baths, walk-in closets and sitting area, plus 4 guest bedrooms + staff, gym and incredible second level terrace ideal for entertaining. A rare offering shown only to pre-qualified Buyers.</p>
        </CardText>
        <Divider/>
        <CardActions style={feedStyle.card.actions}>
          <div className="feed-favorite-count-container">
            <IconButton>
              <HeartIcon color={pink500}/>
            </IconButton>
            <span>3894</span>
          </div>
          <div>
            <IconButton tooltip="Unpublish Post" tooltipStyles={feedStyle.card.tooltip}>
              <UnpublishIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
            <IconButton tooltip="Delete Post" tooltipStyles={feedStyle.card.tooltip}>
              <DeleteIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          </div>
        </CardActions>
      </Card>
      <Card expandable>
        <CardHeader
          title="Sold! Beautiful Burnaby Home"
          subtitle="Amanda Peterson - Realtor"
          textStyle={feedStyle.card.headerText}
          avatar={AvatarExample}
          actAsExpander
          showExpandableButton
        />
        <CardMedia>
          <img src={House} alt=""/>
        </CardMedia>
        <CardText expandable style={{ paddingTop: 0 }}>
          <Divider style={{ marginBottom: 8 }}/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/8085+17th+Ave,+Burnaby,+BC+V3N+1M5/@49.227582,-122.9311627,17z/data=!3m1!4b1!4m5!3m4!1s0x548677ea457b85e1:0xd5deb8fd6976b7d9!8m2!3d49.227582!4d-122.928974">
            <ListItem
              leftIcon={<LocationIcon/>}
              primaryText="8085 17th Ave, Burnaby, BC V3N 1M5"
            />
          </a>
          <p className="card-text">Another build by Supna Homes. This Contemporary Westcoast has the look & luxury you want. TOTAL of 7 BDRMS, 7 BATHS & 3 Kitchens. TOP level has 4 BDRMS & 3 Full BATHS. Master room w/ private balcony & grand ensuite w/ his & her sinks, custom shower w/ spa body jets & free standing soaker tub. MAIN level has 18 ft ceilings in the foyer w/ modern light fixture. Frameless glass stairs w/ single tread steps. Living & Dining room finished w/ elegant linear gas fireplace. BIG kitchen overlooking into family room. Kitchen finished w/ antique white cabinets, Island & wok kit w/ gas stove & fridge. Bosch appliances, commercial size fridge & freezer. Patio w/ fireplace. 2 BDRM legal suite w/ laundry. Entertain guests in media room with bar & 2 piece bath. Radiant heat, A/C, 10 ft ceiling, cameras.</p>
        </CardText>
        <Divider/>
        <CardActions style={feedStyle.card.actions}>
          <div className="feed-favorite-count-container">
            <IconButton>
              <HeartIcon color={pink500}/>
            </IconButton>
            <span>592</span>
          </div>
          <div>
            <IconButton tooltip="Unpublish Post" tooltipStyles={feedStyle.card.tooltip}>
              <UnpublishIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
            <IconButton tooltip="Delete Post" tooltipStyles={feedStyle.card.tooltip}>
              <DeleteIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default muiThemeable()(Feed);
