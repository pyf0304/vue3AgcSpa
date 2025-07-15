export class Condition {
  fldName: string; // Field name
  fldValue: any; // Field value
  comparison: string; // Comparison operator (e.g., '=', 'like')

  constructor(fldName: string, fldValue: any, comparison: string) {
    this.fldName = fldName;
    this.fldValue = fldValue;
    this.comparison = comparison;
  }
}

export class ConditionCollection {
  public whereCond = '';
  private conditions: Condition[] = [];

  // Add a condition to the collection
  public SetCondFldValue(fldName: string, fldValue: any, comparison: string): void {
    const condition = new Condition(fldName, fldValue, comparison);
    this.conditions.push(condition);
  }

  // Get all conditions
  public GetConditions(): Condition[] {
    return this.conditions;
  }

  // Convert conditions to a query string
  public ToQueryString(): string {
    return this.conditions
      .map((cond) => {
        if (cond.comparison.toLowerCase() === 'like') {
          return `${cond.fldName} LIKE '%${cond.fldValue}%'`;
        } else {
          return `${cond.fldName} ${cond.comparison} '${cond.fldValue}'`;
        }
      })
      .join(' AND ');
  }
}
