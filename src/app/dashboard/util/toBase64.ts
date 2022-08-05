import { Observable, ReplaySubject } from 'rxjs';

export function getBase64(file: File): Observable<string> {
  const result = new ReplaySubject<string>(1);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => result.next(reader.result!.toString());
  return result;
}
