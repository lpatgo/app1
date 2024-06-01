import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose, DialogHeader } from '@/components/ui/dialog';

import { Label } from '@/components/ui/label';
import FilterPanel from './filterpanel';

interface FilterButtonProps {
    onComplete: (config: any) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ onComplete }) => {


    const [dialogOpen, setDialogOpen] = useState(false);
    const [includedChoices, setIncludedChoices] = useState<string[]>([]);
    const [excludedChoices, setExcludedChoices] = useState<string[]>([]);
    const [hideTheDead, setHideTheDead] = useState(true);


    const newInclude = (choiceIds: string[]): void => {
        setIncludedChoices(choiceIds);
        if (excludedChoices.filter((choice) => choiceIds.includes(choice)).length > 0) {
            setExcludedChoices(excludedChoices.filter((choice) => !choiceIds.includes(choice)));
        }
    }

    const newExclude = (choiceIds: string[]): void => {
        setExcludedChoices(choiceIds);
        if (includedChoices.filter((choice) => choiceIds.includes(choice)).length > 0) {
            setIncludedChoices(includedChoices.filter((choice) => !choiceIds.includes(choice)));
        }
    }

    const mylabel = setIncludedChoices && Array.isArray(setIncludedChoices) && setIncludedChoices.map((choice) => (
        <Label key={choice}>{choice}</Label>
    ));

    const done = () => {
        const config = {
            include: includedChoices,
            exclude: excludedChoices,
            search: "",
            hideTheDead: hideTheDead
        }
        onComplete(config);
        setDialogOpen(false);
    }

    const clear = () => {
        setIncludedChoices([]);
        setExcludedChoices([]);
    }





    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                   Filter
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>Choose criteria </DialogHeader>
                <FilterPanel />


                <DialogFooter>
                    <Button onClick={() => done()}>Ok</Button>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

