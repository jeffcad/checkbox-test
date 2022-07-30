import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isChecked: boolean = false;

  public async onInputChange(event: any): Promise<void> {
    if (!event.target.checked && this.shouldShowConfirmationDialog()) {
      const dialogResult = await this.showConfirmationDialog();
      if (dialogResult) {
        setTimeout(() => { this.isChecked = true; }, 0);
      }
    }
  }

  private shouldShowConfirmationDialog(): boolean {
    return true;
  }

  private showConfirmationDialog(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
