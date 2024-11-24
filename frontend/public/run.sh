#!/bin/bash

rm Wiktor_Małyska_PL.pdf
rm Wiktor_Małyska_ENG.pdf

PL_URL="https://storage.rxresu.me/cltran1hf006otx3v19aht12j/resumes/Java.pdf"
ENG_URL="https://storage.rxresu.me/cltran1hf006otx3v19aht12j/resumes/Java ENG.pdf"

wget $PL_URL -O "Wiktor_Małyska_PL.pdf"

echo "Downloaded PL resume"

wget $ENG_URL -O "Wiktor_Małyska_ENG.pdf"

echo "Downloaded ENG resume"

