var ac=new AudioContext();var tempo=120;var sequencecombo=new TinyMusic.Sequence(ac,tempo,['G2 e',]);sequencecombo.loop=!1;sequencecombo.gain.gain.value=0.05;var sequencefailcombo=new TinyMusic.Sequence(ac,tempo,['G1 e',]);sequencefailcombo.gain.gain.value=0.05;sequencefailcombo.loop=!1;var sequencegotscore=new TinyMusic.Sequence(ac,tempo,['A5 e',]);sequencegotscore.loop=!1;sequencegotscore.gain.gain.value=0.05;var sequencekill=new TinyMusic.Sequence(ac,tempo,['G3 e',]);sequencekill.gain.gain.value=0.05;sequencekill.loop=!1;var sequencelose=new TinyMusic.Sequence(ac,tempo,['G1 q',]);sequencelose.loop=!1;sequencelose.gain.gain.value=0.05