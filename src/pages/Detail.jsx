import React from "react";
import classes from "./detail.module.scss";
import Breadcrumps from "../components/Breadcrumps";
import GreenOval from "../trifles/GreenOval";
import AngleBtn from "../trifles/AngleBtn";
import MyInput from "../components/MyInput";

const Detail = () => {
  const tags = ["Food", "Recepies", "Fresh", "Vegetable"];
  return (
    <div className={classes.detail}>
      <Breadcrumps />
      <div className={classes.picture}></div>
      <div className={classes.flex}>
        <div className={classes.col}>
          <h2>Tags</h2>
          <div className={classes.tags}>
            {tags.map((tag) => (
              <GreenOval key={Math.random() + Date.now()}>{tag}</GreenOval>
            ))}
          </div>
          <AngleBtn>Back to blog</AngleBtn>
        </div>
        <article>
          <p>
            There’s nothing like a warm cup of tea to start your morning—or
            maybe you’re all about an iced hibiscus on a sunny Saturday
            afternoon. Whether you’re just craving chamomile or are looking to
            ditch your coffee dependency, here’s our go-to guide on
            incorporating a few new teas into your daily routine!{" "}
          </p>
          <h3>Morning Ritual // 9:00 AM</h3>
          <p>
            Want that extra morning energy without the caffeine jitters? Switch
            out your morning mug of coffee for a warm, energizing cup of earl
            grey. Serve as is or stir in some milk and honey for extra coziness.
            If you want to spice things up, try chai tea instead! The
            combination of cinnamon, cardamom, and ginger smells amazing and
            gives you that nice little flavor kick to start your day off right.
          </p>
          <h3>Mid-day Boost // 2:00 PM</h3>
          <p>
            If you’re feeling a little sluggish post-lunch, beat the afternoon
            slump with some lemon ginger green tea. Green tea can be a great
            alternative to coffee in the afternoon when you want that little
            boost of energy. An added benefit: lemon and ginger work together to
            aid digestion which is especially helpful after lunch.{" "}
          </p>
          <p>
            If you’re not into hot drinks, opt-in for a fruity iced green tea
            instead. Steep some honeydew or peach green tea in hot water for a
            few minutes and then pour over ice until it’s nice and cool. Enjoy
            with a slice of lemon, and you’ll feel refreshed and ready to tackle
            any task.
          </p>
          <h3>Evening Calm // 8:00 PM</h3>
          <p>
            Slip on some fuzzy socks, light your favorite candles, and fire up
            the kettle—it’s time to wind down after a long day. Grab yourself a
            soothing cup of lavender chamomile tea and indulge in some
            well-deserved self-love.{" "}
          </p>
          <div style={{display: 'flex', marginBottom: 60}}>
            <h3>Share</h3>
            <GreenOval>Facebook</GreenOval>
            <GreenOval>Pinterest</GreenOval>
            <GreenOval>Twitter</GreenOval>
            <GreenOval>Linkedin</GreenOval>
            </div>
            <h3>Leave a reply</h3>
            <p>Already have an account? <a href="#">Sign in</a> to leave a reply.</p>
            <form>
              <label>
                Name
                <MyInput placeholder="Name"/>
              </label>
              <label>
                Email address
                <MyInput placeholder="Email address" />
                
              </label>
            </form>
        </article>
      </div>
    </div>
  );
};

export default Detail;
