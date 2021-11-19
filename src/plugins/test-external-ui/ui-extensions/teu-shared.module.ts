import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuSection } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuSection({
      id: "test",
      label: "Test",
      items: [
        {
          id: "test-item",
          label: "Test",
          routerLink: ["/extensions/test"],
          icon: 'container'
        }
      ]
    }, 'catalog')
  ]
})
export class TEUSharedModule {}
