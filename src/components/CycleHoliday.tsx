import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "New Year's Day"
        | "Opposite Day"
        | "Valentine's Day"
        | "Thanksgiving"
        | "Christmas";
    const [CurHoliday, setHoliday] = useState<Holiday>("New Year's Day");
    function setHolidayA() {
        if (CurHoliday === "Christmas") {
            setHoliday("New Year's Day");
        } else if (CurHoliday === "New Year's Day") {
            setHoliday("Opposite Day");
        } else if (CurHoliday === "Opposite Day") {
            setHoliday("Thanksgiving");
        } else if (CurHoliday === "Thanksgiving") {
            setHoliday("Valentine's Day");
        } else if (CurHoliday === "Valentine's Day") {
            setHoliday("Christmas");
        }
    }
    function setHolidayC() {
        if (CurHoliday === "New Year's Day") {
            setHoliday("Opposite Day");
        } else if (CurHoliday === "Opposite Day") {
            setHoliday("Valentine's Day");
        } else if (CurHoliday === "Valentine's Day") {
            setHoliday("Thanksgiving");
        } else if (CurHoliday === "Thanksgiving") {
            setHoliday("Christmas");
        } else if (CurHoliday === "Christmas") {
            setHoliday("New Year's Day");
        }
    }
    function HolidayToEmoji() {
        if (CurHoliday === "New Year's Day") {
            return "📆";
        } else if (CurHoliday === "Opposite Day") {
            return "❓";
        } else if (CurHoliday === "Valentine's Day") {
            return "💖";
        } else if (CurHoliday === "Thanksgiving") {
            return "🥧";
        } else if (CurHoliday === "Christmas") {
            return "❄️";
        }
    }
    return (
        <div>
            <Button onClick={setHolidayA}>Advance by Alphabet</Button>
            <Button onClick={setHolidayC}>Advance by Year</Button>
            <span>Holiday: {HolidayToEmoji()}</span>
        </div>
    );
}
