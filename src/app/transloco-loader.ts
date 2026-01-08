import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        //return this.http.get<Translation>(`/i18n/${lang}.json`);
        // load translation files from Angular assets so they're served at /assets/i18n/*.json
        return this.http.get<Translation>(`http://localhost:5173/assets/i18n/${lang}.json`);
    }
}
