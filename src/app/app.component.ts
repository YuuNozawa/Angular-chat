import { Component } from '@angular/core';
import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '松本人志');
const ANOTHER_USER: User = new User(2, '浜田雅功');
const COMMENTS: Comment[] = [
    new Comment(ANOTHER_USER, 'うぅわ！'),
    new Comment(ANOTHER_USER, 'じゅわあああぁぁああぁ！！'),
    new Comment(CURRENT_USER, 'なははははははははは'),
    new Comment(CURRENT_USER, 'ホンマに嫌になって帰るときのウルトラマンか？'),
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
}
