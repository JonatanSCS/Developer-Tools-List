import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ToolsComponent } from '../app.component/app.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(ToolsComponent,[ HTTP_PROVIDERS ]);