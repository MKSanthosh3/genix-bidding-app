import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/core/store/auth/user.model';
import { AuthState } from 'src/core/store/auth/auth.reducer';
import { selectUser, selectIsLoggedIn } from 'src/core/store/auth/auth.selector';
import { logout } from 'src/core/store/auth/auth.actions';
import * as AuctionActions from 'src/core/store/auction/auction.actions';


interface AuctionItem {
  imageUrl: string;
  name: string;
  minimumBid: number;
  currentBid: number;
  endTime: string;
  description:string;
  biddingHistory:any;
}

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})


export class AuctionsListComponent implements OnInit {
  user$!: Observable<User | null>;
  isLoggedIn$!: Observable<boolean>;

  auctionItems: AuctionItem[] = [];

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.loadAuctionItems();
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  loadAuctionItems(): void {
    // Load the auction items, either from an API or locally for demo purposes
    this.auctionItems = [
      {
        imageUrl: '../../../assets/images/auctions/headphones.png',
        name: 'Sony Black Headphones',
        minimumBid: 100,
        currentBid: 157,
        endTime: '1 day 12 hrs 43 minutes',
        description:'Sony Black Headphones are premium over-ear headphones offering deep bass, clear audio, and noise cancellation. Comfortable for extended use, they are ideal for both music lovers and travelers seeking an immersive listening experience.',
        biddingHistory:[]
      },
      {
        imageUrl: '../../../assets/images/auctions/airpods.png',
        name: 'Apple AirPod 2nd Gen',
        minimumBid: 101,
        currentBid: 158,
        endTime: '1 day 12 hrs 43 minutes',
        description:'Experience the freedom of wireless audio with the Apple AirPods 2nd Gen. Featuring high-quality sound, seamless connectivity with all your Apple devices, and hands-free Siri support, these AirPods offer a truly effortless listening experience. The quick-charge case provides up to 24 hours of battery life, keeping your music, podcasts, and calls going all day long. Designed for comfort and convenience, the AirPods 2nd Gen are perfect for your on-the-go lifestyle.',
        biddingHistory:[]
      },
      {
        imageUrl: '../../../assets/images/auctions/power-bank.png',
        name: 'Mi 2000mAh Power Bank',
        minimumBid: 100,
        currentBid: 157,
        endTime: '1 day 12 hrs 43 minutes',
        description:'Mi 2000mAh Power Bank is a compact, reliable portable charger with a high-capacity battery, suitable for keeping your devices powered on the go.',
        biddingHistory:[]
      },
      {
        imageUrl: '../../../assets/images/auctions/speakers.png',
        name: 'Tribit Bluetooth Speaker',
        minimumBid: 101,
        currentBid: 158,
        endTime: '1 day 12 hrs 43 minutes',
        description:'The Tribit Bluetooth Speaker is a portable and powerful audio solution designed for high-quality sound on the go. Equipped with advanced bass technology and a compact design, this speaker delivers rich, full-range sound that enhances any listening experience, whether indoors or outdoors. The speaker features a waterproof design, making it perfect for pool parties, beach outings, or rainy day adventures. Its long-lasting battery life ensures uninterrupted music playback for hours, while the easy Bluetooth pairing allows seamless connectivity with your devices. With intuitive controls and durable build, the Tribit Bluetooth Speaker is an ideal companion for all your music needs.',
        biddingHistory:[]
      },
      {
        imageUrl: '../../../assets/images/auctions/cctv-camera.png',
        name: 'WiFi Security Camera',
        minimumBid: 100,
        currentBid: 157,
        endTime: '1 day 12 hrs 43 minutes',
        description:'WiFi Security Camera: A cutting-edge WiFi Security Camera designed to keep your home or office safe with 24/7 monitoring. It features high-definition video recording, night vision for clear footage in low light conditions, and real-time motion alerts to keep you informed. The camera supports two-way audio, allowing you to communicate directly through your mobile device. With easy installation and remote access via a smartphone app, you can monitor your property anytime, anywhere. Its weatherproof design ensures reliable performance indoors and outdoors, making it an ideal choice for comprehensive security coverage.',
        biddingHistory:[]
      }
    ];
  }
  bidNow(auctionItem: AuctionItem): void {
    // Dispatch the action to set the selected auction item
    this.store.dispatch(AuctionActions.setAuctionItem({ auctionItem }));
  }

}
