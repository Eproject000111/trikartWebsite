import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
// import { UserService } from 'src/app/services/users/user.service';

interface ColumnItem {
	key: number,
	name: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	listOfColumns: ColumnItem[] = [
		{
			key: 1,
			name: 'Name'
		},
		{
			key: 2,
			name: 'Email'
		},
		{
			key: 3,
			name: 'Mobile'
		},
		{
			key: 4,
			name: 'Otp'
		}

	]

	constructor(
		// private _userService: UserService
	){}

	ngOnInit(): void {
		// this.getAllUser()
	}

	// getAllUser(){
	// 	this._userService.getAllUsers().subscribe({
	// 		next: (res) => {
	// 			console.log(res)

	// 		},
	// 		error: (err) => {
	// 			throw err
	// 		}
	// 	})
	// }

}
